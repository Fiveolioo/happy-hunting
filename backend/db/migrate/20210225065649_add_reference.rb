class AddReferencesToPosts < ActiveRecord::Migration[6.0]
  def change
    add_reference :posts, :user
    add_reference :posts, :carmake
  end
end
