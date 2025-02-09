import { Head } from "@inertiajs/react"

import { Separator } from "@/Components/ui/separator"
import { AddBookForm } from "@/Components/upload/add-book-form"

const Create = () => {
	return (
		<div className="mb-32 space-y-6">
			<Head title="Add book" />
			<div>
				<h2 className="text-2xl font-bold tracking-tight">Add book</h2>
				<p className="text-sm text-muted-foreground">
					Add a book to your collection.
				</p>
			</div>
			<div>
				<Separator />
			</div>
			<div>
				<AddBookForm />
			</div>
		</div>
	)
}

export default Create
