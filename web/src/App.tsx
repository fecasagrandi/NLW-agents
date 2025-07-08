import { Button } from "./components/ui/button";
import { Wand } from "lucide-react";

export function App() {
  return (
    <div>
      <Button>Um botão</Button>
      <Button variant="destructive">Um botão</Button>
      <Button variant="outline">Um botão</Button>
      <Button variant="secondary">Um botão</Button>
      <Button variant="ghost">Um botão</Button>
      <Button>
        <Wand />
      </Button>
    </div>


  )
}