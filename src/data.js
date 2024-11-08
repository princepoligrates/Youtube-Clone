export const API_KEY = "AIzaSyAA6JScuAbwyDWcf0SZ1N_z30tO1scBY2U";

export const value_converter = (value) => {
if (value>=1000000){
    return Math.floor(value/1000000)+"M";
}
else if(value>=1000){
    return Math.floor(value/1000)+"K"
}
else{
    return value
}
}