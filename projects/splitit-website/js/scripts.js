/*! jQuery v3.3.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license*/

$(document).ready(function(){

    //-------- GET FILE NAME -------
    function getCurentFileName(){
        var pagePathName= window.location.pathname;
        return pagePathName.substring(pagePathName.lastIndexOf("/") + 1);
    }
    //-------- /GET FILE NAME -------

    // -----------------------------------------------------------------------------------

    //-------- LOGIN SCRIPTS -------
    //Hard coded username and password
    $("#loginButton").click(function(){
        var loginEmail = document.getElementById("loginEmail").value;
        var loginPassword = document.getElementById("loginPassword").value;

        if((loginEmail == "myuser@gmail.com") && (loginPassword == "123")){
            var fileName = getCurentFileName();
            if(fileName == "index.html"){
                window.open("html/login.html","_self");
            }else{
                window.open("login.html","_self");
            }
        }else{
            alert("Invalid Username or Password");
        }
    });

    //Use "Enter" in login button
    $("#loginEmail").keypress(function(e){
        if(e.keyCode==13)
            $("#loginButton").click();

    });
    //Use "Enter" in login button
    $("#loginPassword").keypress(function(e){
        if(e.keyCode==13)
            $("#loginButton").click();
    });
    //-------- /LOGIN SCRIPTS -------

    // -----------------------------------------------------------------------------------

    //-------- GROUPS AND FRIENDS SCRIPTS -------
    //Harded coded groups and friends
    var group = [
        ["Jake", "Rosa", "Amy", "Terry", "Charles"],
        ["Michael", "Jim", "Dwight", "Pam"],
        ["Ted", "Marshal", "Robin", "Barney", "Lily"]
    ];

    //Get friends from group 1
    var group1 = '<ul style="list-style-type:none">';
    var group1login = '<ul style="list-style-type:none">';
    for (var i = 0; i < group[0].length; i++) {
        group1 += '<li>' + group[0][i] + '<button id="delete1" class="btn btn-outline-secondary" style="font-size:10px; float:right"> <span class="glyphicon glyphicon-minus"></span></button>' + '</li>';
        group1login  += '<li>' + group[0][i] + '</li>';
    }
    $(".group1").html(group1);
    $(".group1login").html(group1login);

    //Get friends from group 2
    var group2 = '<ul style="list-style-type:none">';
    var group2login = '<ul style="list-style-type:none">';
    for (var j = 0; j < group[1].length; j++) {
        group2 += '<li>' + group[1][j] + '<button class="btn btn-outline-secondary" style="font-size:10px; float:right"> <span class="glyphicon glyphicon-minus"></span></button>' + '</li>';
        group2login += '<li>' + group[1][j] + '</li>';
    }
    $(".group2").html(group2);
    $(".group2login").html(group2login);

    //Get friends from group 3
    var group3 = '<ul style="list-style-type:none">';
    var group3login = '<ul style="list-style-type:none">';
    for (var k = 0; k < group[2].length; k++) {
        group3 += '<li>' + group[2][k] + '<button class="btn btn-outline-secondary" style="font-size:10px; float:right"> <span class="glyphicon glyphicon-minus"></span></button>' + '</li>';
        group3login += '<li>' + group[2][k] + '</li>';
    }
    $(".group3").html(group3);
    $(".group3login").html(group3login);


    //Get list of all friends as selection and as link
    var options = '';
    var friends = '';
    var groups = '';
    for (var g = 0; g < group.length; g++) {
        groups += '<li value="'+g+'">' + '<a href="#group'+(g+1)+'">' + 'Group '+(g+1)+ '</a>' + '</li>';
        for (var f = 0; f < group[g].length; f++) {
            options += '<option value="' + group[g][f]+ '">' + group[g][f] + '</option>';
            friends += '<li value="' + group[g][f]+ '">' + '<a href="#'+group[g][f]+'">' + group[g][f] + '</a>' + '</li>';
            console.log(group[g][f]);
        }
    }
    $(".selectFriends").html(options);
    $("#friendsList").html(friends);
    $("#groupList").html(groups);
    //-------- /GROUPS AND FRIENDS SCRIPTS -------

    // -----------------------------------------------------------------------------------

    //-------- CHANGE OR UPDATE CONTENTS USING DROPDOWNS -------
    //Update contents using navbar and dropdown
    $('.navcontent:not(:first)').hide();
    $('.dropdown a').click(function (event) {
        event.preventDefault();
        var content = $(this).attr('href');
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        $(content).show();
        $(content).siblings('.navcontent').hide();
    });

    //Open settings correct tab
    $('#information a').click(function (e) {
        e.preventDefault();
        $('a[href="' + $(this).attr('href') + '"]').tab('show');
    })

    //-------- /CHANGE OR UPDATE CONTENTS USING DROPDOWNS -------

    // -----------------------------------------------------------------------------------

    //-------- EDIT MEMBERS FROM GROUPS -------
//    function addMember(newMember){
//        members.push(newMember);
//        alert(newMember);
//    }
//
//    var newMember = document.getElementById("passedMember").value;
//    $("#newMemberButton").click(function(){
//        alert(newMember);
//        members.push(newMember);
//
//    });
//
//    //function to add new member{
//    $("#newMemberButton").click(function(){
//        members.push(document.getElementById("passedNewMember").value);
//        alert(document.getElementById("passedNewMember").value);
//    });

    $("#delete1").click(function(){
        var val = $(this).closest("ul").find(".group1").text();
        console.log(val);
        var index = group1.findIndex(function(item) {return item.name == val})
        console.log(index)
        group1.splice(index, 1)
        console.log(group1);
    })
    //-------- /EDIT MEMBERS FROM GROUPS -------

});
