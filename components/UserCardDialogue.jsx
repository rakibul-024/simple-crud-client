'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
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

const UserCardDialoguePage = ({ user }) => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const handleUpdateUser = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const updateUser = Object.fromEntries(formData.entries())

    try {
      const res = await fetch(`http://localhost:5000/users/${user._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateUser),
      })
      const result = await res.json()

      if (result.modifiedCount > 0) {
        setOpen(false) // Close the dialog after a successful update
        router.refresh() // Refresh server components to reflect updated data
      }
    } catch (error) {
      console.error("Failed to update user:", error)
    }
  } // <-- Missing closing brace was here

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="mx-2" variant="outline">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleUpdateUser} className="space-y-4">
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
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default UserCardDialoguePage