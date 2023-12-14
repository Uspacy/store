import { IEmailBox, IEmailBoxes, IEmailFilters, IFolder, IFolders, ILetter, ILetters } from '@uspacy/sdk/lib/models/email';
import { IErrorsAxiosResponse } from '@uspacy/sdk/lib/models/errors';
import { IUpdateEmailBox } from '@uspacy/sdk/lib/services/EmailService/connect-email-box.dto';

export type createNewLetterModeType = 'window' | 'fullScreen' | 'fromLetter';
export interface IState {
	emailBoxes: IEmailBoxes;
	emailBox: IEmailBox;
	connectedEmailBox: IEmailBox;
	folders: IFolders;
	folder: IFolder;
	letters: ILetters;
	letter: ILetter;
	loadingEmailBoxes: boolean;
	loadingEmailBox: boolean;
	loadingConnectEmailBox: boolean;
	loadingUpdateEmailCredentials: boolean;
	loadingUpdateEmailBox: boolean;
	loadingRemoveEmailBox: boolean;
	loadingFolders: boolean;
	loadingLetters: boolean;
	loadingLetter: boolean;
	loadingCreatingLetter: boolean;
	loadingDeletingLetter: boolean;
	errorLoadingEmailBoxes: IErrorsAxiosResponse;
	errorLoadingEmailBox: IErrorsAxiosResponse;
	errorLoadingConnectEmailBox: IErrorsAxiosResponse;
	errorLoadingUpdateEmailCredentials: IErrorsAxiosResponse;
	errorLoadingUpdateEmailBox: IErrorsAxiosResponse;
	errorLoadingRemoveEmailBox: IErrorsAxiosResponse;
	errorLoadingFolders: IErrorsAxiosResponse;
	errorLoadingLetters: IErrorsAxiosResponse;
	errorLoadingLetter: IErrorsAxiosResponse;
	errorLoadingCreatingLetter: IErrorsAxiosResponse;
	errorLoadingDeletingLetter: IErrorsAxiosResponse;
	openLetter: boolean;
	isCreateNewLetter: boolean;
	createNewLetterMode: createNewLetterModeType;
	filters: IEmailFilters;
}

export interface ILettersParams {
	id: number;
	page: number;
	list: number;
}

export interface IUpdateEmailBoxPayload {
	id: number;
	data: IUpdateEmailBox;
}
