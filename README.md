# goTom Api Doc (Swagger)

## How to update the gotom OpenAPI yaml files for goTom employees

the OpenAPI specification is split up into 3 files

- [campaign-api-doc.yaml](campaign-api-doc.yaml)
- [crm-sync-api-doc.yaml](crm-sync-api-doc.yaml)
- [graph-report-api-doc.yaml](graph-report-api-doc.yaml)

1. Update the one you are manipulating using swagger editor e.g. https://editor.swagger.io/ this helps you avoid syntax errors
2. Go to https://dash.readme.com/ login, access dev.gotom.io
3. Click on API Reference (bottom left)
4. On "Your API Definitions" double check to which one you want to upload the updated yaml file. Click edit (I twice uploaded the right yaml to the wrong endpoint, so be careful)
5. If you cannot see "Drag a file here or click to browse" you maybe, need to select "file" in the popup
6. Then drag/upload the yaml file.
7. Reload the page to be sure you did not overwrite an existing endpoint with the wrong yaml file (if after a reload there are 2 endpoints with the same name, then you made a mistake)


Visit <a href="https://dev.gotom.io" target="_blank">dev.gotom.io</a> for the API documentation.
