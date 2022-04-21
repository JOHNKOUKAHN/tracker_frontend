const months = [ {name:'Enero', days:31},
                 {name:'Febrero', days:28},
                 {name:'Marzo', days:31},
                 {name:'Abril', days:30},
                 {name:'Mayo', days:31},
                 {name:'Junio', days:30},
                 {name: 'Julio',days:31},
                 {name:'Agosto', days:31},
                 {name:'Septiembre', days:30}, 
                 {name:'Octubre', days:31},
                 {name:'Noviembre', days:30}, 
                 {name:'Diciembre', days:31}]

const getDate = (dateString) => {
    
    const date = new Date(dateString)
    const monthNumber = date.getMonth() + 1
    const year = date.getFullYear()
    return{
        monthNumber,
        monthName: months[date.getMonth()].name,
        year
    }   
}

export default getDate