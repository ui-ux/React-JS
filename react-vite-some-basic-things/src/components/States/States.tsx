import { useState } from "react"
import Input from "./Input.tsx"

function States() {  
    const [helperText, setHelperText] =
        useState('This is a helper text for the States component.');
    const [userData, setUserData] = useState({ name: 'Some default name' });
    const [newUserData, setNewUserData] = useState({ name: 'Component input' });

    const inputClick = () => {
        console.log('Input clicked!');
        setHelperText('Input was clicked!')
        console.log(setHelperText);
    }

    return (
        <div>
            <h1>States</h1>
            <p>States are used to manage data that can change over time in a React component.</p>
            <div>
                {userData.name}
            </div>
            <div>
                <input
                    value={userData.name}
                    onClick={inputClick}
                    onChange={(e) => setUserData({ name: e.target.value })}
                />
                <p>{helperText}</p>
                <hr />
                <div>
                    <div>
                        {newUserData.name}
                    </div>
                        <Input
                            value={newUserData.name}
                            onValueChange={(name) => setNewUserData({ name })}
                            clickMessage="This message was passed from States"
                        />
                    </div>
                </div>
        </div>
    )
}

export default States