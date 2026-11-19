import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const UserCardDialoguePage = ({user}) => {
    return (
        <Dialog>
          <DialogTrigger render={<Button className='mx-2' variant="outline">Edit</Button>} />
          <DialogContent className="sm:max-w-sm">
            <form>
              <DialogHeader>
                <DialogTitle>Edit User</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <FieldGroup className="my-4">
                <Field>
                  <Label htmlFor="name-1">Name</Label>
                  <Input id="name-1" name="name" defaultValue={user.name} />
                </Field>
                <Field>
                  <Label htmlFor="email-1">User Email</Label>
                  <Input id="email-1" name="email" defaultValue={user.email} />
                </Field>
              </FieldGroup>
              <DialogFooter>
                <DialogClose render={<Button variant="outline">Cancel</Button>} />
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
    );
};

export default UserCardDialoguePage;