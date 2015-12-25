const HELLO = "hello";

export default function main(state = {whom: "World"}, action) {
  switch (action.type) {
    case HELLO:
      return {...state, whom: action.whom};
    default:
      return state;
  }
}

export function hello(whom) {
  return {type: HELLO, whom};
}
