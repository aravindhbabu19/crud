const Fetch = async(url='',method=null,errmsg=null) => {
    try{
    const response=await fetch(url,method)
        if (!response.ok) throw Error('please refresh your page')
    }
catch(err){
    errmsg=err.message
}
finally{
    return errmsg
}
}

export default Fetch