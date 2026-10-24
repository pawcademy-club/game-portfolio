

const scriptsInEvents = {

	async EIdentity_Event13_Act1(runtime, localVars)
	{

	},

	async EIdentity_Event14_Act1(runtime, localVars)
	{

	},

	async EIdentity_Event15_Act1(runtime, localVars)
	{

	},

	async EIdentity_Event16_Act1(runtime, localVars)
	{

	},

	async EIdentity_Event20_Act1(runtime, localVars)
	{

	},

	async EForm_Event78_Act1(runtime, localVars)
	{
		let input = prompt("Please specify", runtime.globalVars.other1);
		    runtime.globalVars.other1 = input;
	},

	async EForm_Event79_Act1(runtime, localVars)
	{
		let input = prompt("Please specify", runtime.globalVars.other2);
		    runtime.globalVars.other2 = input;
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
