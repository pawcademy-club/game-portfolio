

const scriptsInEvents = {

	async ESpin_Event26_Act1(runtime, localVars)
	{
		let result = prompt("Please enter the password", "");
		
		if (result === null)
		{
		    // Cancel
		    runtime.globalVars.correctPassword = false;
		}
		else if (result === runtime.globalVars.password)
		{
		    // correct Password
		    runtime.globalVars.correctPassword = true;
		}
		else
		{
		    // Incorrect Password
		    runtime.globalVars.correctPassword = false;
			alert("incorrect password");
		}
	},

	async ESpin_Event51_Act2(runtime, localVars)
	{
		let input = prompt("Please enter the password", runtime.globalVars.tempItemName);
		    runtime.globalVars.tempItemName = input;
	},

	async ESpin_Event60_Act1(runtime, localVars)
	{
		let input = prompt("Please enter the password", runtime.globalVars.password);
		    runtime.globalVars.password = input;
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
