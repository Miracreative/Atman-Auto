/**
 * Представляет тип файла.
 */
type FileType = '.pdf' | '.zip';

/**
 * Представляет данные, связанные с файлом.
 *
 * @property {number} id - Идентификатор файла.
 * @property {string} name - Имя файла.
 * @property {FileType} filetype - Тип файла.
 * @property {string | number} filesize - Размер файла, который может быть числом или строкой с указанием размера.
 * @property {string} url - URL-адрес для загрузки файла.
 */
type SoutData = {
	id: number;
	name: string;
	filetype: FileType;
	filesize: string | number;
	url: string;
};

export type { SoutData };
