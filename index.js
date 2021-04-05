const core = require ('@actions/core')
const github = require ('@actions/github')

try {
    // new App created using JavaScript Action
    const ApptoCreate = core.getInput('App-creation');
    consolelog(`Heloo ${ApptoCreate}!!!`);
    const time = (new Date()).toTimeString();
    core.setOutput("App created at: ", time)

    // Get the JSON webhook playload for the event triggered for this workflow
    const playload = JSON.stringify(github.context.playload, undefined, 2)
    console.log(`The Event playload: ${playload}`);
    
} catch (error) {
  core.setFailed(error.message)
    
}