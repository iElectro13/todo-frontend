export const todoReducer = (state, action) => {
    switch (action.type) {
        case "SET_TASKS":
            return { ...state, tasks: action.payload };
        case "CHECK_TASK":
            return {
                ...state,
                tasks: state.tasks.map((item) =>
                    item._id === action.payload._id
                        ? {...item, isDone : !item.isDone}
                        : item
                ),
            };
        case "REMOVE_FROM_TASKS":
            return {
                ...state,
                tasks: state.tasks.filter(
                    (task) => task._id != action.payload._id
                ),
            };
        default:
            return state;
    }
};
