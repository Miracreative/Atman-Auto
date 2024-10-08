type FileType = 'pdf' | 'zip';

type SoutData = {
	id: number;
	name: string;
	fileType: FileType;
	fileSize: string | number;
};

export type { SoutData };
