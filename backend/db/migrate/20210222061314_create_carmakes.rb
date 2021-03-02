class CreateCarmakes < ActiveRecord::Migration[6.0]
  def change
    create_table :carmakes do |t|
      t.string :name 

      t.timestamps
    end
  end
end
