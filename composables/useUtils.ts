// Composables are like custom hooks in react. You can delegate a re-useable function to this folder to maintain DRY principles.
export const useUtils = () => {
    const sayHello = () => {
        console.log('Howdy Y\'all !!');
    };

    const sayHello3 = (name: string) => {
        return `Hey hey people! ${name} here`;
    };

    return {
        sayHello, sayHello3
    };
};