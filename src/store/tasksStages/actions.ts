import { createAsyncThunk } from '@reduxjs/toolkit';
import { uspacySdk } from '@uspacy/sdk';

export const fetchStages = createAsyncThunk('stages/fetchStages', async (groupId: number, thunkAPI) => {
	try {
		const res = await uspacySdk.tasksStagesService.getTasksStages(groupId);
		return res.data;
	} catch (e) {
		return thunkAPI.rejectWithValue('Failure');
	}
});
