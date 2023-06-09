function format_name(first, last){
    return first !== undefined && last !== undefined ? `<h1> Hello, ${first} ${last}` : "<h1>Hello, Guest</h1>";
}

module.exports =  {format_name}