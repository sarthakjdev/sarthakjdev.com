const prettierWriteCommand = 'yarn prettier --write'

module.exports = {
	'*.ts': [prettierWriteCommand],
	'*.tsx': [prettierWriteCommand],
	'*.js': [prettierWriteCommand],
	'*.jsx': [prettierWriteCommand],
	'*.css': [prettierWriteCommand],
	'*.scss': [prettierWriteCommand]
}
