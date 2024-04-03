# Good and Bad External Ids

## Examples for Good External IDs

- `3456`
- `abc123`
- `5d583774-96e5-4bb7-aa48-a8ed36e2723e`


## Bad External ID

Any special characters are usually harder to deal with.

Keep in mind that the external IDs you use are used in the path of the URL. Properly encoding them and using them in the authentication is needed to access them again later.
It is easier to create a record with a weird external ID than to retrieve or update that record.

Example:

- `avOiD '/ ü ä &` 

Generally case sensitivity is not supported for external IDs.
