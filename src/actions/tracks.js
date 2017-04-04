var mockApiData = [
	{id:1,name:'one track'},
	{id:2,name:'two track'},
	{id:3,name:'tree track'},
	{id:4,name:'four track'},
	{id:5,name:'five track'},
	{id:6,name:'six track'}
];
export const getTracks = ()=> dispatch =>{
		setTimeout(()=>{
			console.log('I got tracks');
			dispatch({type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData });
		},2000)

};