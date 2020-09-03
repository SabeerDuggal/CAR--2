class Player{
    constructor(){}

    getCount(){
        var pcRef = database.ref('playerCount')
        pcRef.on("value", function(data){
            playerCount = data.val()
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
        
    }

    update(name){
        var playerIndex = "player" + playerCount
        database.ref(playerIndex).set({
            name: name
        })
    }
}