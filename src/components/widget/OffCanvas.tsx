import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon } from "@/assets/icons";

export const OffCanvas = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button
          className="w-fit items-center gap-2 rounded-2xl font-bold duration-200 ease-out data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 text-default p-3 hover:bg-primary lg:hidden"
          variant="ghost"
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-secondary border-0 bg-gradient-to-t from-primary to-secondary p-4 text-txt-primary z-[999]"
      >
        <SheetTitle>Cursos</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};
