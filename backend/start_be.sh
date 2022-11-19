#!/bin/bash
npm i sqlite3 -D && rm -rf node_modules && npm i && npm rebuild
npm install
npm run start