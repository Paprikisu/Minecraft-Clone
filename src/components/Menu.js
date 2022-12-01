import { useStore } from "../hooks/useStore"

export const Menu = () => {
    const [saveWorld, resetWorld] = useStore((state) =>[state.saveWorld, state.resetWorld])

    return(<div className="menu absolute">
        <p>Controls:</p>
        <p>Keys 1-5 to select blocks</p>
        <p>Left click to place blocks</p>
        <p>Alt + Left click to remove blocks</p>

    </div>)
}