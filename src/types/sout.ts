/**
 * Представляет тип файла.
 */
type FileType = 'pdf' | 'zip';

/**
 * Представляет данные, связанные с файлом.
 *
 * @property {number} id - Идентификатор файла.
 * @property {string} name - Имя файла.
 * @property {FileType} fileType - Тип файла.
 * @property {string | number} fileSize - Размер файла, который может быть числом или строкой с указанием размера.
 * @property {string} url - URL-адрес для загрузки файла.
 */
type SoutData = {
	id: number;
	name: string;
	fileType: FileType;
	fileSize: string | number;
	url: string;
};

export type { SoutData };