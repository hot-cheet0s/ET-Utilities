module.exports = {
    name: 'play',
    description: "Commands",
    execute(message, args){

        function play(connection,message){
            var server = servers[message.guild.id];
            
            server.dispatcher = conneciton.playStream(ytdl(server.queue[0], {filer: "audioonly"}));

            server.queue.shift();

            server.dispatcher.on("end", function(){
                if(server.queue[0]){
                    play(connection, message);
                }else { 
                    connection.disconnect

                }
            });

        

        }
          
        if(!args[1]){
            message.channel.send("You need to provide a music / video you want to play");
            return;

        }

        if(!message.member.voiceChannel){
            message.channel.send("You must be in a VC to play music");
            return;
        
        }
 
        if(!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        }

        var server = servers[message.guild.id];
    
        server.queue.push(args[1]);
    
        if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
           play(connection, message);
        
        });
    }
    
    


}