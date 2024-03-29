<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- react is a ui manipulation (logic)library -->
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <!-- frontend -> dom  -->
    <!-- react dom -> webpage ke andar react lib ke help actual changes leke aao  -->
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <!-- to convert jsx to js  -->
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <!-- to bring data from some where else -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.26.1/axios.min.js"></script>
</head>

<body>
    <!-- root hi banti  -->
    <div id="root"></div>
    <script type="text/babel">
            function InputBox() {
            let [cValue, setValue] = React.useState("");
            const setInputData = function (e) {
                console.log(e.target.value);
                setValue(e.target.value);
            }
            return (<div>
                <input type="text" value={cValue} 
                onChange={setInputData} />
                <button >Add Task</button>
            </div>)
        }

        function ListItems() {
            let [tasks, updatetasks] = React.useState([]);
            // data -> html convert (array data)-> map
            return (
                <ul>
                    {
                        tasks.map(function (task) {
                            return <li>{task}</li>
                        })
                    }
                </ul>)
        }

        function Todo() {
            return <div>
                <h1> Todo App </h1>
                <InputBox></InputBox>
                <ListItems></ListItems>
            </div>
        }
        ReactDOM.render(<Todo></Todo>, document.querySelector("#root"));
// bottom to top
    </script>
</body>

</html>
