import express from 'express';
const app = express();

const port = 3000;
app.listen(port, () => console.log(`Listening on ${port}!`));

const staticRoute = express.static('public');
app.use('/public', staticRoute);
app.use('/', staticRoute); 


app.get("/api/:id", (req, res) => {
    let getProverb = sendProverb(req.params.id);
    res.json(getProverb)});


function sendProverb(id) {
    const proverbs = [
        "Actions speak louder than words.",
        "All good things must come to an end.",
        "Beauty is in the eye of the beholder.",
        "Better late than never.",
        "Don't bite the hand that feeds you.",
        "Don't count your chickens before they hatch.",
        "Don't put all your eggs in one basket.",
        "Every cloud has a silver lining.",
        "Fortune favors the bold.",
        "Honesty is the best policy.",
        "If it ain't broke, don't fix it.",
        "It's a piece of cake.",
        "Let bygones be bygones.",
        "No pain, no gain.",
        "Out of sight, out of mind.",
        "Practice makes perfect.",
        "The early bird catches the worm.",
        "The grass is always greener on the other side.",
        "The pen is mightier than the sword.",
        "There's no smoke without fire.",
        "Time heals all wounds.",
        "When in Rome, do as the Romans do.",
        "Where there's smoke, there's fire.",
        "You can't have your cake and eat it too.",
        "You can't judge a book by its cover.",
        "You reap what you sow.",
        "Actions speak louder than words.",
        "All is fair in love and war.",
        "If the shoe fits, wear it.",
        "Make hay while the sun shines.",
        "The early bird gets the worm."
      ];
    return proverbs[id-1];
}
