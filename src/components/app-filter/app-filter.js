import "./app-filter.css";


const AppFilter = ({filter,filterstate}) => {
const buttonsData  = [
{name:'all',label:'Все сотрудники'},
{name:'povish',label:'На повышение'},
{name:'bilshe1000',label:'З/П больше 1000$'}];
const buttons = buttonsData.map(({name,label})=>{
    const active = filterstate===name;
    const clazz = active?'btn-light':'btn-outline-light';
    return (
        <button type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={()=>filter(name)}>
        {label}
</button> 
    )
})
    return (
        <div className="btn-group">
           {buttons}
        </div>
    )
}

export default AppFilter;