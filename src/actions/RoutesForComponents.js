export const routesSaver = (e, postFlag) => {
    if(e.type==='click'){
        localStorage.setItem('route', e.target.id)
    }
    postFlag&&localStorage.setItem('route', e)
}