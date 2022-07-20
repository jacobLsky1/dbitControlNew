export const getData = async (selectAppData, year, month, day) => {
    try {
    var appDate = ""+year+"-"+month+"-"+day
    const str = "https://dbit-control-new.herokuapp.com/appdata?app="+selectAppData+"&date="+appDate
    const response = await fetch(str);
    const data = await response.json();
    return data;
    } catch (err) {
        console.log(err)
    }
}

export const allApps = async () => {
    try {
        const response = await fetch('https://dbit-control-new.herokuapp.com/allApps');
        const data = await response.json();

        return data;
    }catch (err) {
        console.log(err)
    }
}