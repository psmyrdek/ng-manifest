#!/usr/bin/env node

/* eslint-disable no-console */

const glob = require('glob-promise')
const fs = require('fs')
const {join} = require('path')

;(async () => {

    const STATS_FILENAME = 'ng-manifest.json'

    const projectRoot = process.argv[3]
    if (!projectRoot) {
        throw new Error('--root param is required!')
    }

    const options = {
        absolute: false
    }

    const projectPath = join(process.cwd(), projectRoot)
    const data = await glob(`${projectPath}/dist/**/+(*.js|*.css)`, options)

    const fileNames = data.map(path => {
        const parts = path.split('/')
        return parts[parts.length - 1]
    })

    console.log('Building Angular bundles summary based on the following files:')
    console.log(fileNames)

    const bundles = {
        stats: {
            js: {
                legacy: [
                    {src: fileNames.find(f => f.match(/^runtime-es5/)), type: 'text'},
                    {src: fileNames.find(f => f.match(/^polyfills-es5/)), type: 'text'},
                    {src: fileNames.find(f => f.match(/^scripts/)) || '', type: 'text'},
                    {src: fileNames.find(f => f.match(/^vendor-es5/)), type: 'text'},
                    {src: fileNames.find(f => f.match(/^main-es5/)), type: 'text'}
                ],
                modern: [
                    {src: fileNames.find(f => f.match(/^runtime-es2015/)), type: 'module'},
                    {src: fileNames.find(f => f.match(/^polyfills-es2015/)), type: 'module'},
                    {src: fileNames.find(f => f.match(/^scripts/)) || '', type: 'text'},
                    {src: fileNames.find(f => f.match(/^vendor-es2015/)), type: 'module'},
                    {src: fileNames.find(f => f.match(/^main-es2015/)), type: 'module'}
                ],
                files: {
                    runtimeES5: fileNames.find(f => f.match(/^runtime-es5/)),
                    runtimeES2015: fileNames.find(f => f.match(/^runtime-es2015/)),
                    polyfillsES5: fileNames.find(f => f.match(/^polyfills-es5/)),
                    polyfillsES2015: fileNames.find(f => f.match(/^polyfills-es2015/)),
                    vendorES5: fileNames.find(f => f.match(/^vendor-es5/)),
                    vendorES2015: fileNames.find(f => f.match(/^vendor-es2015/)),
                    mainES5: fileNames.find(f => f.match(/^main-es5/)),
                    mainES2015: fileNames.find(f => f.match(/^main-es2015/)),
                    scripts: fileNames.find(f => f.match(/^scripts/)) || ''
                }
            },
            css: fileNames.find(file => file.match(/^styles/))
        }
    }

    const statsPath = join(projectPath, 'dist', STATS_FILENAME)
    fs.writeFile(statsPath, JSON.stringify(bundles, null, 2), err => {
        if (err) {
            console.error(err)
        }
        console.log(`Successfully stored Angular bundles summary under: ${statsPath}`)
    })

})()