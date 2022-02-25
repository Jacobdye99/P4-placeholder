class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :movie_id
      t.text :review
      t.integer :likes
      t.integer :stars

      t.timestamps
    end
  end
end
