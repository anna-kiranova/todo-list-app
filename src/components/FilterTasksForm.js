import React from 'react';
import { connect } from 'react-redux';
import { filterUpdate } from '../actions/filter'


const FilterTasksForm = ({
    filter,
    filterUpdateFunc
}) => <div className="block">
            <h2>Filter</h2>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="showCompl"
                        checked={filter.showCompl}
                        onChange={filterUpdateFunc}
                    />
                    Show completed
                </label>
                <input type="date" name="from" value={filter.from} onChange={filterUpdateFunc} />
                <input type="date" name="to" value={filter.to} onChange={filterUpdateFunc} />
            </div>
            <input name="search" placeholder="Text search (title + description)" value={filter.search} onChange={filterUpdateFunc} />
        </div>

const mapStateToProps = (state) => ({
    filter: state.filter
});
  
const mapDispatchToProps = (dispatch) => ({
    filterUpdateFunc: (event) => dispatch(filterUpdate(event)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterTasksForm);