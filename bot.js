const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$";
client.on('ready', () => {
  console.log(`Help Commands Is Enabled`);
});


client.on("message", message => {
 if (message.content === "$help") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`**
:radio_button: Stylight Bot Help :


<~>~<~>~<~>~<~>~<~>~<~>
$admin ~> مساعدة ادارية
<~>~<~>~<~>~<~>~<~>~<~>
$public ~> مساعد عامة
<~>~<~>~<~>~<~>~<~>~<~>
$games ~> مساعدة حول الاعاب
<~>~<~>~<~>~<~>~<~>~<~>

-
$premium-info ~> معلومات حول النسخة المدفوعة
**`)
   message.channel.sendEmbed(embed)
    
   }
}); 
client.on("message", message => {
 if (message.content === "$public") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`**
      __Public Commands__
$infobot
معلومات حول البوت :robot: 
-
$serverinfo
معلومات حول السيرفر :computer:
-
$hinfo
معلومات حولك او حول شخص اخر :minidisc: 
-
$meminfo
معلومات حول الاعضاء :floppy_disk:
-
$avatar
صورة شخص او روبوت في السيرفر :mountain: 
-
$myprems
اضهار جميع الخصائص المتاحة لديك :dvd: 
-
$rmsg
اعادة ارسال الرسالة التي كتبتها :compression: 
-
$serimg
اضهار صورة السيرفر :night_with_stars: 
-
$roca
ارسال جميع اسماء الرومات و الرتب المتواجدة في السيرفر :metro: 
-
$inv
لدعوة البوت الى سيرفرك :trackball: 
-
$support
للحصول على رابط سيرفر العم الفني :gear: 
-
$role 
لاعطاء رتب :gear: 
-
$roleremove
لسحب رتبة :gear: 

==> Created By Kaser#1118
**`)
   message.channel.sendEmbed(embed)
    
   }
});
client.on("message", message => {
 if (message.content === "$admin") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`**
      __Adminstrator Commands__
$ban 
حضر شخص من السيرفر :pick: 
-
$kick
طرد شخص من السيرفر :hammer: 
-
$cm
حذف الرسال من الروم
$cc
قفل الكتباة في الروم :alarm_clock: 
-
$oc 
فتح الكتابة في الروم :timer: 
-
$at
انشاء روم كتابي :bookmark_tabs: 
-
$av
انشاء روم صوتي :microphone2: 
-
$smu
اسكات شخص عن الكتابة :closed_book: 
-
$cmu
ارجاء الشخص الى الكتابة :book: 
-
$rac
حذف جميع الرومات :no_entry: 
-
$rar
حذف جميع الرتب :name_badge: 

==> Created By A.#2001
**`)
   message.channel.sendEmbed(embed)
    
   }
});
client.on("message", message => {
 if (message.content === "$games") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`
      __Games Commands__
$fkk 
لعبة فكك :musical_keyboard: 
-
$vi
لعبة اسرع كتابة :speech_balloon: 
-
$sar
لعبة صراحة :octagonal_sign: 
-
$3i
لعبة عقاب :vertical_traffic_light: 
-
[Other Games Comming.../العاب اخرى قادمة...]

==> Created By Kaser#1118
`)
   message.channel.sendEmbed(embed)
    
   }
});
client.on("message", message => {
 if (message.content === "$premium-info") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`
      __Premium Info__
-توفر خاصية الاغاني بجودة عالية
-توفر خاصية الرابط
-توفر خاصية الترجمة
-توفر خاصية الذعم الفني السريع
-توفر خاصية الترحيب
-توفر خاصية منع نشر الروابط
-توفر خاصية عذم السب
-توفر خاصية الروبوتات الافتاضية (بمعنى عدة اليات مساعدة للسيرفر الخاص بك) المساعدة
-توفر خاصية انشاء غرف مساعدة مخفية تضهر للشخص الذي يريد المساعدة فقط
-عذم قدرة اذخال اي شخص الالي الى السيرفر غير

جميع هذه الخصائص تكون متوفرة في النسخة المدفوعة من الاي
للحصول على النسخة المدفوعة يرجى التواصل مع
A.#2001 / <@506034854043975681>
`)
   message.channel.sendEmbed(embed)
    
   }
});
client.on('ready', () => {
  console.log(`Admin Bot Is Enabled`);
});


client.on('message', omar => {
if(omar.content.split(' ')[0] == prefix + 'rac') {  // delete all channels
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
omar.guild.channels.forEach(m => {
m.delete();
});// omar jedol / Codes
}// omar jedol / Codes
if(omar.content.split(' ')[0] == prefix + 'rar') { // delete all roles
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
omar.guild.roles.forEach(m => {
m.delete();
});// omar jedol / Codes
omar.reply("`تم حذف جميع الرتب بنجاح`")
}// omar jedol / Codes
});
client.on("message", (message) => {
if (message.content.startsWith( prefix +"at")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});
client.on("message", (message) => {
if (message.content.startsWith( prefix +"av")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});
client.on('message', message => {
       if(message.content === prefix + "cc") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
              });
                }
    if(message.content === prefix + "oc") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__:white_check_mark:**")
              });
    }
       
});
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});
client.on("message", message => {
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});

client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.channel.send({
  files: [
    "./images/mk.jpg"
  ]
})
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

client.on('message', async message =>{
  if (message.author.boss) return;
	

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "smu") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
${message.author.tag} تمت معاقبتك بواسطة
[ ${reason} ] : السبب
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
`)
		.setFooter(`في سيرفر : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `cmu`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);
 
    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});
client.on('ready', () => {
  console.log(`Public Bot Is Enabled`);
});

client.on('ready', function(){	
    var ms = 40000 ;	
    var setGame = [`Type $help`,`Type $inv`,`Users ${client.users.size} | Guilds ${client.guilds.size}`];	
    var i = -1;	
    var j = 0;	
    setInterval(function (){	
        if( i == -1 ){	
j = 1;	
       }	
        if( i == (setGame.length)-1 ){	
            j = -1;	
      }	
       i = i+j;	
        client.user.setGame(setGame[i],`http://www.youtube.com/gg`);	
}, ms);	
	
});
client.on('message', message => {
if (message.content.startsWith(settings.prefix + 'myperms')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)
                  message.channel.send({embed:zPeRms});

    }
});
client.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find("name","welcome");
      if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let norelden = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:norelden});          
               
 
      }
      });
client.on('message', message => { 
           if (message.content.startsWith(settings.prefix + "hinfo")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL) 
    .setColor("#707070")
    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
    .setFooter(`Mars Bot`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}       
});

 client.on('message', message => {
 if(message.content.startsWith(settings.prefix +"serverinfo")){
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Server ID:**", message.guild.id,true)
.addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("👥 Members ",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Others **" , message.guild.region,true)
.addField("** 🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
.setColor('#000000')
message.channel.sendEmbed(embed)

}
});
client.on('message', message => {
    if (message.content.startsWith(settings.prefix + "infobot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``Mars Bot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
			      .addField('``My Prefix``' , `[ $ ]` , true)
			      .addField('``My Language``' , `[ JS ]` , true)
			      .setFooter('==> Created By Kaser#1118')
    })
}
});
client.on('message', message => {
    if (message.content.startsWith(settings.prefix +"avatar")) {
if(!message.channel.guild) return;
        var mentionned = message.mentions.users.first();
    var client;
      if(mentionned){
          var client = mentionned; } else {
          var client = message.author;
      }
        const embed = new Discord.RichEmbed()
                           .addField('Requested by:', "<@" + message.author.id + ">")
        .setColor(000000)
        .setImage(`${client.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
   client.on('message',function(message) {
  if (message.author.bot) return;
                  if(!message.channel.guild) return;

                    if (message.content === settings.prefix + "meminfo") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info :sparkles:
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
:bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });  
client.on('message',function(message) {

  let args = message.content.split(" ").slice(1).join(" ");
  if(message.content.startsWith(settings.prefix + "rmsg")) {
    if(!args) return;
    message.channel.send(`**# ${args}**`); // محطوط # عشان محد يستخدم البوت لتبنيد / طرد احد من السيرفر
}
});
client.on("message", message => {
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === settings.prefix + "serimg"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

client.on('message', message => {
    if (message.content === settings.prefix +"roca") {
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});
var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == settings.prefix +"roca"){
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});

client.login(process.env.BOT_TOKEN);
