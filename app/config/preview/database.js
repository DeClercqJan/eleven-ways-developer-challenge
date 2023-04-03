const db_info = alchemy.settings.database?.preview;
const ds_type = db_info?.type || 'mongo';

// Create the 'default' datasource of type 'mongo'
Datasource.create(ds_type, 'default', {
	host      : db_info?.host      || '127.0.0.1',
	database  : db_info?.database  || 'eleven-ways-developer-challenge_preview',
	login     : db_info?.login     || false,
	password  : db_info?.password  || false,
	port      : db_info?.port      || 27017,
	folder    : db_info?.folder    || null,
});