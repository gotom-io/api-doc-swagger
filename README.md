# goTom Api Doc (Swagger)

## How to update the gotom OpenAPI yaml files for goTom employees

the OpenAPI specification is split up into 3 files

- [campaign-api-doc.yaml](campaign-api-doc.yaml)
- [crm-sync-api-doc.yaml](crm-sync-api-doc.yaml)
- [graph-report-api-doc.yaml](graph-report-api-doc.yaml)

1. Update the one you are manipulating using swagger editor e.g. https://editor.swagger.io/ this helps you avoid syntax errors
2. If you update the version, be sure to update all version numbers in all 3 files.
3. Go to https://dash.readme.com/ login, access dev.gotom.io
4. Click on API Reference (bottom left)
5. On "Your API Definitions" double check to which one you want to upload the updated yaml file. Click edit (I twice uploaded the right yaml to the wrong endpoint, so be careful)
6. If you cannot see "Drag a file here or click to browse" you maybe, need to select "file" in the popup
7. Then drag/upload the yaml file.
8. Reload the page to be sure you did not overwrite an existing endpoint with the wrong yaml file. The GUI does not refresh after upload, leading to more confusion so reload the page. (if after a reload there are 2 endpoints with the same name, then you made a mistake)
9. If you updated the version number, you now should update it as well in readme.com. Go to versions, click edit version, adjust, and save.
    - It is at the top left in the GUI. E.g. top left click on v4.4.x
    - Edit the version number (increase it)
    - Click on "main version?", otherwise all pages break as readme.com will try to find pages under a specific version.
10. Write down what was changed in the change log, should be here: /docs/change-log e.g. https://dash.readme.com/project/gotom/v4.4.2/docs/change-log
    - E.g. Admin - Guides - Documentation - Change Log


Visit <a href="https://dev.gotom.io" target="_blank">dev.gotom.io</a> for the API documentation.
