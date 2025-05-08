import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import LeftPositionedTimeline from "../timeline/time-line";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John C.", salary: 800, increase: false, rise: true, id: 1 },
        { name: "Alex M.", salary: 3000, increase: true, rise: false, id: 2 },
        { name: "Carl W.", salary: 5000, increase: false, rise: false, id: 3 },
      ],
      colores: ["success", "secondary", "success", "secondary"],
      term: "",
      filter: "all",
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((elem) => elem.id !== id),
      };
    });
  };
  add = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };
  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };
  updateSerach = (term) => {
    this.setState({ term });
  };
  mosfilter = (items, filter) => {
    switch (filter) {
      case "povish":
        return items.filter((items) => items.rise);
      case "bilshe1000":
        return items.filter((items) => items.salary > 1000);
      default:
        return items;
    }
  };
  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  changesalary = (id) => {
    console.log(id);
  };
  render() {
    const { data, term, filter } = this.state;
    const iflter = a;
    const rised = this.state.data.filter((elem) => elem.rise).length;
    const increased = this.state.data.filter((elem) => elem.increase).length;
    const visibleData = this.mosfilter(this.searchEmp(data, term), filter);
    return (
      <div className="app">
        <AppInfo
          data={this.state.data.length}
          increased={increased}
          rised={rised}
        />

        <div className="search-panel">
          <SearchPanel search={this.updateSerach} />
          <AppFilter filter={this.onFilterSelect} filterstate={filter} />
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          changesalary={this.changesalary}
        />
        <EmployeesAddForm onAdd={this.add} />
      </div>
    );
  }
}

export default App;
