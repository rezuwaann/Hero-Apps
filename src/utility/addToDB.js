const getInstalledApp = () => {
    const installedApp = localStorage.getItem("installed");
    if (installedApp) {
        const allInstalledApps = JSON.parse(installedApp)
        return allInstalledApps;

    } else {
        return [];
    }
}

const addToStoreDB = (id) => {

    const installedApps = getInstalledApp()

   
        installedApps.push(String(id))
        const installedStr=JSON.stringify(installedApps)
        localStorage.setItem("installed",installedStr )
        
        console.log(typeof installedStr)

    

}

export { getInstalledApp, addToStoreDB }