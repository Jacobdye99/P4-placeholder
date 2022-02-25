class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name
      t.string :image
      t.integer :movie_id

      t.timestamps
    end
  end
end
