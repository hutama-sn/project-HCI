$(document).ready(function () {
    $('#1').click(function (e) { 
        $('h1').text('Elesis');
        $('p').text('A human warrior from Kanavan and the leader of the Ruby Knights, Elesis joined the Chase in hopes of locating her father Elscud, a Kanavan Tracker who had gone missing after being dispatched in the search for Kazeaze.');
        $('.fullBody').attr('src', '../image/elesis1.png');
        $('.role').attr('src', '../image/assault.png');
    });
});

$('#2').click(function (e) { 
    $('h1').text('Lire');
    $('p').text('An elf of Eryuell Island and a member of the Elven Corps, Lire joined the Chase on behalf of the elves of Eryuell to combat Kazeazes evil.');
    $('.fullBody').attr('src', '../image/lire1.png');
    $('.role').attr('src', '../image/ranged.png');
});

$('#3').click(function (e) { 
    $('h1').text('Arme');
    $('p').text('A cheerful Magician of the Violet Mage Guild in Serdin, Arme joined the Chase for one simple reason alone: to encounter the evil queen and her magic in order to study it.');
    $('.fullBody').attr('src', '../image/arme1.png');
    $('.role').attr('src', '../image/mage.png');
});

$('#4').click(function (e) { 
    $('h1').text('Lass');
    $('p').text('A member of the Silver Cross Thieves and a half-demon, Lass was a child possessed by Kazeaze. He was first introduced at Partusay Sea as an illusion and later has his first true encounter with the Chase at Kamiki Castle. He was finally freed from Kazeaze possession at Kazeaze Castle upon her defeat. Overwhelmed with guilt at the atrocities he had committed whilst under Kazeaze control, he joined the Chase to atone.');
    $('.fullBody').attr('src', '../image/lass1.png');
    $('.role').attr('src', '../image/assault.png');
});

$('#5').click(function (e) { 
    $('h1').text('Ronan');
    $('p').text('A Spell Knight of Kanavan and a member of the Kanavan Royal Guard, Ronan was first introduced at the Gorge of Oath and requested their aid at Gaikoz Castle, leaving after empowering the group with the spell, Holy Bless. Upon defeating Gaikoz at his own castle, Ronan thanked the group and joined them on their journey to overthrow Kazeaze.');
    $('.fullBody').attr('src', '../image/ronan1.png');
    $('.role').attr('src', '../image/tank.png');
});

$('#6').click(function (e) { 
    $('h1').text('Ryan');
    $('p').text('An elven Druid hailing from the Elven Forest, Ryan was first encountered by the Chase in the form of a Wolf as he fought to defend his homeland. After defeating the Troll who was responsible for the destruction of the forest, Ryan joined the Chase.');
    $('.fullBody').attr('src', '../image/ryan1.png');
    $('.role').attr('src', '../image/tank.png');

});

$('#7').click(function (e) { 
    $('h1').text('Amy');
    $('p').text('An Oracle and celebrated Dancer of Xenia, Amy first appeared in Lake Aurora where she spied on the Chase before leaving. She was later encountered at the Temple of Cuatal and after saving Samsara with the help of the Chase, joined them to stop the Ascendant God mission of chaos.');
    $('.fullBody').attr('src', '../image/amy1.png');
    $('.role').attr('src', '../image/support.png');
   
    $('.charDescription').css('width', '60%');
});

$('#8').click(function (e) { 
    $('h1').text('Jin');
    $('p').text('A survivor of the nearly annihilated guild, Silver Knights, Jin was first encountered at the Ruins of the Silver Knights, where he killed an Undead Fighter who was attacking Elesis. After defeating the Black Fairy Queen, Jin joined the Chase in hopes of avenging his fallen brethren.');
    $('.fullBody').attr('src', '../image/jin1.png');
    $('.role').attr('src', '../image/assault.png');

});


