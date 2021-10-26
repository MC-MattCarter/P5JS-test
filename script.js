//Goal: Create a sort of Mad Libs theme for a news article where certain words are swapped out for others using an array and jQuery functions.
//Result: Successfully got words to be swapped out at the press of a button so the news article looks really funky from a story/content aspect but is also quite funny to read (it only took me 5 hours of almost putting my fist through the screen when I spent 2.5 hours trying to figure out why my code wasnt working when there was a single typo). I also added a couple of pictures in too. In the future I could maybe expand upon this by letting the user physically type certain inquiries such as people, verbs, companies, numbers, and stuff like an actual mad libs game.


$(document).ready(function() {
//all my arrays for word swapping
var sport = ["soccer","hockey", "baseball","basketball", "field hockey", "bowling", "curling", "dart throwing", "running","swimming","gymnastics","speedwalking",]
var company = ["Hertz", "Tesla", "Apple","Microsoft", "Toyota", "Nissan", "Fiat", "Lexus", "Mercedes", "Audi", "Volvo","Ford","Ferrari","Lamborghini", "Acura","Chevrolet","Buick","BMW","Cadillac","Chrysler","Dodge","Honda","Hyundai","Jeep","Kia","Land Rover","Mazda"]
var money =["$200,000","$238","$.01","$14 trillion","$0","$12,567","$7 billion", "$289,897,231.38","$874,592,920.03","$345.07","$890,348.96","$438 billion"]
var human =["Tom Brady","Bill Gates","Jeff Bezos","Matt Carter", "Matt Damon","Harry Styles","Drake","Jay-z","Kanye West","Donald Trump","Obama","Hillary Clinton","Ted Cruz", "Joe Rogan","Elon Musk","Victor Arcelus","Katherine Bergeron","Homer Simpson","Abraham Lincoln","John F. Kennedy"]
var president = ["Hillary Clinton","Ted Cruz","Xi Jinping","Katherine Bergeron","Victor Arcelus","Abraham Lincoln","John F. Kennedy", "George Bush","George H.W. Bush","Obama","Bill Clinton", "Andrew Garfield","Theodore Roosevelt","George Washington"]
var number = ["0","1","2","3","30","100","300,000", "897","1,000,000,000,000","99","9,000"]
var fuel = ["diesel","coal-powered","nuclear-powered","gas-powered","low-efficiency petroleum","electric","hybrid","wind-powered"]

//Click button to make words swap
$("button").click(function() {
    //Web page title swaps to say "Fake News" instead of "Real News"
    $("#webTitle").text("Fake News")
    //All my word swapping functions using class identifiers.
    $(".sport").each(function() {
        var randomIndex = Math.floor(Math.random()*sport.length);
        $(this).text(sport[randomIndex]);
    });
    $(".company").each(function(){
        var randomIndex2 = Math.floor(Math.random()*company.length);
        $(this).text(company[randomIndex2])
    })
    $(".money").each(function(){
        var randomIndex3 = Math.floor(Math.random()*money.length);
        $(this).text(money[randomIndex3]);
    });
    $(".human").each(function() {
        var randomIndex4 = Math.floor(Math.random()*human.length);
        $(this).text(human[randomIndex4]);
    });
    $(".president").each(function() {
        var randomIndex5 = Math.floor(Math.random()*president.length);
        $(this).text(president[randomIndex5]);
    });
    $(".number").each(function() {
        var randomIndex6 = Math.floor(Math.random()*number.length);
        $(this).text(number[randomIndex6]);
    });
    $(".fuel").each(function() {
        var randomIndex7 = Math.floor(Math.random()*fuel.length);
        $(this).text(fuel[randomIndex7]);
    });

});

});