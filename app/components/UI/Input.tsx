import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { TextField } from '@radix-ui/themes'

const InputSearch = () => {
    return (
        <>
            <TextField.Root>
                <TextField.Slot>
                    <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
                <TextField.Input placeholder="Search Room" className="pl-8" />
            </TextField.Root>
        </>
    )
}

export default InputSearch