class Form{

    constructor(){}

    display()
    {

        var title = createElement('h2')
        title.html("VIRTUAL PET-2")
        title.position(130,0)

        var input = createInput("playerName")
        input.position(130,160)

        var button = createButton("play")
        button.position(250,200)

        var greet = createElement('h3')

        button.mousePressed(function(){

            input.hide()
            button.hide()

            var name= input.value()

            player.update(name)

            greet.html("Hello"+ name)
            greet.position(130,160)
        })

    }
}