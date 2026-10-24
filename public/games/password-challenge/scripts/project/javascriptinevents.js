

const scriptsInEvents = {

	async EPassword_Event101_Act2(runtime, localVars)
	{
		const text = runtime.globalVars.password;
		
		const regex = /^(?=.*\d).*$/;
		
		if (regex.test(text)) {
		
		    const total = [...text.matchAll(/\d/g)]
		        .reduce((sum, n) => sum + Number(n[0]), 0);
		
		    runtime.globalVars.TotalAngka = total;
		
		} else {
		
		    runtime.globalVars.TotalAngka = 0;
		
		}
	},

	async EPassword_Event129_Act2(runtime, localVars)
	{
		const text = runtime.globalVars.password;
		
		const regex = /^(?=.*\d).*$/;
		
		if (regex.test(text)) {
		
		    const total = [...text.matchAll(/\d/g)]
		        .reduce((sum, n) => sum + Number(n[0]), 0);
		
		    runtime.globalVars.TotalAngka = total;
		
		} else {
		
		    runtime.globalVars.TotalAngka = 0;
		
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
