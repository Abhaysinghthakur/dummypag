
let infoOfEpisode = (seasonNum = 0 ,episodeNum = 0) =>{
	for(episode of jsonData._embedded.episodes){
		if(episode.season === seasonNum && episode.number === episodeNum){	
			return episode
		}
	}

	return `Enter vaild season no. and episode no.`
	
}//function to check episode details by season no and and episode no. 

let infoOfMultipleEpisodes = (...episodeId) =>{

	for(id of episodeId){

		let check
	
		for(episode of jsonData._embedded.episodes){
			if(id === episode.id){
				
				check = episode
				console.log(check)

			}
		}
		if(check === undefined){
			console.log(`No episode find by this id : ${id}`)
		}
	}
}//function to check details of multiple episodes by episode id

let infoByName = (episodeName = "") =>{

	for(episode of jsonData._embedded.episodes){
		if(episode.name.toLowerCase() === episodeName.toLowerCase()){
			return episode
		}
	}
	return `No episode found by this name`
	
}//function to check detail of episode by episode name.


let chooseFunction = prompt(`
	Enter 1 to find info of episode by giving season and episode no.
	Enter 2 to find info of multiple episode by giving episode id.
	Enter 3 to find info of episode by its name`)// function for user to select function to run. 


if(chooseFunction == 1)
{
	let tempSeasonNum = prompt(`Enter season no `)
	let tempEpisodeNum = prompt(`Enter episode no`)
	console.log(infoOfEpisode(Number(tempSeasonNum),Number(tempEpisodeNum)))

} else if(chooseFunction == 2)
{
	let temp = 0
	let tempArray = []
	
	do{

		temp = prompt(`Enter episode Id one by one or 0 to exit`)
		
		if(Number(temp)!=0){
			tempArray.push(Number(temp))
		}

	}while(temp != 0)

	infoOfMultipleEpisodes(...tempArray)

}else if(chooseFunction == 3)
{
	let nameOfEpisode = prompt(`Enter name of episode`)
	console.log(infoByName(nameOfEpisode))

}else
{

	alert(`Please fill vaild choice`)

}// Asking user to choose with function to run.


